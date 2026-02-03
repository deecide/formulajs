import { expect } from 'chai'
import * as dateTime from '../../src/date-time.js'
import * as dateUtils from '../../src/utils/date.js'

describe('Date & Time utils', () => {
  beforeEach(() => {
    dateUtils.useDate()
  })

  describe('FormulaJs default behavior', () => {
    it('should return plain JS Date Object', () => {
      expect(dateTime.DATEVALUE('1/1/1900')).to.deep.equal(new Date(1900, 0, 1))
    })

    it('should return serial number using a useSerial util switch', () => {
      dateUtils.useSerial()

      expect(dateTime.DATE(1900, 1, 1)).to.equal(1)
      expect(dateTime.DATEVALUE('1/1/1900')).to.equal(1)
    })
  })

  describe('dateToSerial ', () => {
    it('should convert JS Date to Serial', () => {
      expect(dateUtils.dateToSerial(new Date(1900, 0, 1))).to.equal(1)
      expect(dateUtils.dateToSerial(new Date(1900, 0, 31))).to.equal(31)
      expect(dateUtils.dateToSerial(new Date(1900, 1, 28))).to.equal(59)
      expect(dateUtils.dateToSerial(new Date(1900, 1, 29))).to.equal(60)
      // Excel returns 61 because Excel is shit and believe 29/02/1900 exists while it does not, need to handle to in ExcelTranscoder
      expect(dateUtils.dateToSerial(new Date(1900, 2, 1))).to.equal(60)
      expect(dateUtils.dateToSerial(new Date(1900, 2, 2))).to.equal(62)
    })
  })

  describe('serialToDate ', () => {
    it('should convert Serial to JS Date', () => {
      expect(dateUtils.serialToDate(1)).to.deep.equal(new Date(1900, 0, 1))
    })
  })
})

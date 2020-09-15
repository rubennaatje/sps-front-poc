const parseSVG = require('svg-path-parser')
const svgPath = require('svg-path-properties')

export class SVGPixi extends PIXI.Graphics {
  constructor (path) {
    super()
    this.svgPathProperties = new svgPath.svgPathProperties(path)
    this.path = path
  }

  readSvgPath () {
    parseSVG(this.path).forEach(row => {
      // Extend this a bit?
      switch (row.code) {
      case 'C':
        this.bezierCurveTo(row.x1, row.y1, row.x2, row.y2, row.x, row.y)
        break
      case 'M':
        this.moveTo(row.x, row.y)
        break
      case 'Z':
        this.closePath()
        break
      }
    })
    // this.closePath();
  }

  getTotalLength () {
    return this.svgPathProperties.getTotalLength()
  }

  getPointAtLength (length) {
    return this.svgPathProperties.getPointAtLength(length)
  }

  getTangentAtLength (length) {
    return this.svgPathProperties.getTangentAtLength(length)
  }

  getAllPropertiesAtLength (length) {
    return this.svgPathProperties.getPropertiesAtLength(length)
  }

  getParts () {
    return this.svgPathProperties.getParts()
  }
}

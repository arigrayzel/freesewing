import freesewing from '@freesewing/core'
import plugins from '@freesewing/plugin-bundle'
import Brian from '@freesewing/brian'
import config from '../config'
// Parts
import draftBack from './back'
import draftFront from './front'
import draftSleeve from './sleeve'
import draftPocket from './pocket'
import draftHood from './hood'
import draftWaistband from './waistband'
import draftCuff from './cuff'

// Create new design
const Huey = new freesewing.Design(config, plugins)

// Attach draft methods from Brian to prototype
Huey.prototype.draftBase = function (part) {
  return new Brian(this.settings).draftBase(part)
}
Huey.prototype.draftFrontBase = function (part) {
  return new Brian(this.settings).draftFront(part)
}
Huey.prototype.draftBackBase = function (part) {
  return new Brian(this.settings).draftBack(part)
}
Huey.prototype.draftSleevecap = function (part) {
  return new Brian(this.settings).draftSleevecap(part)
}
Huey.prototype.draftSleeveBase = function (part) {
  return new Brian(this.settings).draftSleeve(part)
}

// Attach own draft methods to prototype
Huey.prototype.draftBack = draftBack
Huey.prototype.draftFront = draftFront
Huey.prototype.draftSleeve = draftSleeve
Huey.prototype.draftPocket = draftPocket
Huey.prototype.draftHood = draftHood
Huey.prototype.draftWaistband = draftWaistband
Huey.prototype.draftCuff = draftCuff

// Named exports
export { config, Huey }

// Default export
export default Huey

import React from 'react'
import { SiteConfigModel } from '../../model/siteConfig'

const SiteConfigContext = React.createContext({} as SiteConfigModel)
export const SiteConfigProvider = SiteConfigContext.Provider
export default SiteConfigContext
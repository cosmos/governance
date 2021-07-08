const p = require('../current-parameters.json');

module.exports = {
    theme: "cosmos",
    title: "Cosmos Hub Governance",
    themeConfig:{
        custom: true,
        currentParameters: p,
        sidebar: {
            auto: true,
            nav: [
                {
                    title: "Reference"
                }
            ]
        }
    }
 };
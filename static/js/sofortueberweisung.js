/**
 * Sofortueberweisung
 *
 * LICENSE
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2015 Dominik Pfaffenbauer (http://dominik.pfaffenbauer.at)
 * @license    http://www.coreshop.org/license     GNU General Public License version 3 (GPLv3)
 */

pimcore.registerNS("pimcore.plugin.coreshop.sofortueberweisung");

pimcore.plugin.coreshop.sofortueberweisung = Class.create(coreshop.plugin.admin, {

    getClassName: function() {
        return "pimcore.plugin.coreshop.sofortueberweisung";
    },

    initialize: function() {
        coreshop.plugin.broker.registerPlugin(this);
    },

    uninstall: function() {
        //TODO remove from menu
    },

    coreshopReady: function (coreshop, broker) {
        coreshop.addPluginMenu({
            text: t("coreshop_sofortueberweisung"),
            iconCls: "coreshop_icon_sofortueberweisung",
            handler: this.openSofortueberweisung
        });
    },

    openSofortueberweisung : function()
    {
        try {
            pimcore.globalmanager.get("coreshop_sofortueberweisung").activate();
        }
        catch (e) {
            //console.log(e);
            pimcore.globalmanager.add("coreshop_sofortueberweisung", new pimcore.plugin.coreshop.sofortueberweisung.settings());
        }
    }
});

new pimcore.plugin.coreshop.sofortueberweisung();
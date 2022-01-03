import CurrencyDistributor from './currency-distributor.js';
import {registerSettings} from './registerSettings.mjs';

import {createMainMenuButton} from './componentHelpers.js';

Hooks.once('init', async () => {
    CurrencyDistributor.log(false, 'on init');
    registerSettings();
});

Hooks.once('ready', async () => {
    CurrencyDistributor.log(false, 'on ready');
});

Hooks.on('renderPlayerList', async (playerList, html) => {
    if (!game.settings.get(CurrencyDistributor.ID, CurrencyDistributor.SETTINGS.DISPLAY_BUTTON)) {
        return;
    }

    CurrencyDistributor.log(false, html);

    const distributionButtonTemplate = createMainMenuButton('distribute', 'Make it rain', 'fa-expand-arrows-alt', 'Distribute');
    const requestButtonTemplate = createMainMenuButton('request', 'Get soaked', 'fa-compress-arrows-alt', 'Request');

    html.addClass('position-relative')
        .append(`<div class="currency-distributor__main-menu app scale-0"><div class="flexcol justify-flex-start">${distributionButtonTemplate}${requestButtonTemplate}</div></div>`);

    html.on('click', '.currency-distributor__main-menu .currency-distributor__icon-button', (event) => {
        CurrencyDistributor.log(false, 'menu click', event.currentTarget);

        $(event.currentTarget).closest('.currency-distributor__main-menu').toggleClass('scale-0', true);
        html.find('.icon-button--active').toggleClass('icon-button--active');
    })
    
    const tooltip = game.i18n.localize('CURRENCY-DISTRIBUTOR.playerList-button-title');

    const loggedInUserListItem = 
    html.find(`[data-user-id="${game.userId}"]`)
        .addClass('flex-gap-3')
        .append(`<button type="button" class="currency-distributor__icon-button flex0" title="${tooltip}"><i class="fas fa-coins"></i></button>`)
    
    loggedInUserListItem.on('click', '.currency-distributor__icon-button', (event) => {
        CurrencyDistributor.log(false, 'click-clack');
        html.find('.currency-distributor__main-menu').toggleClass('scale-0');
        $(event.currentTarget).toggleClass('icon-button--active');
    });
});

Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(CurrencyDistributor.ID);
});
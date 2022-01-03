import CurrencyDistributor from './currency-distributor.js';

export const registerSettings = () => {

    game.settings.register(CurrencyDistributor.ID, CurrencyDistributor.SETTINGS.DISPLAY_BUTTON, {
        name: `CURRENCY-DISTRIBUTOR.settings.${CurrencyDistributor.SETTINGS.DISPLAY_BUTTON}.name`,
        hint: `CURRENCY-DISTRIBUTOR.settings.${CurrencyDistributor.SETTINGS.DISPLAY_BUTTON}.hint`,
        default: true,
        type: Boolean,
        scope: 'client',
        config: true,
        onChange: () => ui.players.render()
    });

}
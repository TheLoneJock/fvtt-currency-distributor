export default class CurrencyDistributor {
    static ID = 'TLJ-currency-distributor';

    static IDs = {
        MAINMENU: `${this.ID}-MAINMENU`
    };

    static TEMPLATES = {
        MAINMENU: `modules/${this.ID}/templates/main-menu.hbs`
    };   

    static SETTINGS = {
        DISPLAY_BUTTON: 'display-button'
    };

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
    }
}
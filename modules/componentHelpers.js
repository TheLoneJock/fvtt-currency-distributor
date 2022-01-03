export function createMainMenuButton(action, title, iconClass, text, ...additionalButtonClasses) {
    console.log(additionalButtonClasses);
    console.log([...additionalButtonClasses]);
    return `<button class="currency-distributor__icon-button flexrow flex-gap-2 width-max-content ${additionalButtonClasses.join(' ')}" title="${title}" data-action="${action}"><span>${text}</span>&nbsp;<i class="fas ${iconClass}" ></i></button>`;
}
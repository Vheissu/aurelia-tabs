declare module "index" {
    export function configure(aurelia: any): void;
}
declare module "tab-section" {
    export class TabSection {
        private element;
        section: any;
        viewModel: any;
        viewContent: any;
        constructor(element: any);
        attached(): void;
    }
}
declare module "tab-sections" {
    export class TabSections {
        private element;
        constructor(element: any);
        attached(): void;
    }
}
declare module "tabs" {
    export class Tabs {
        private element;
        private ea;
        tabs: any;
        inmodal: boolean;
        constructor(element: any, ea: any);
        attached(): void;
    }
}

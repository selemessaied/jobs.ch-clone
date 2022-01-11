'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">codechallenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-414ba7a3d1bcb68a89b3adf1bf8c6a2b78164b96be8b326417a49e7674a36974403002102a7ad49fb42a4659eec3352e581095a2e3521736261d252150db5871"' : 'data-target="#xs-components-links-module-AppModule-414ba7a3d1bcb68a89b3adf1bf8c6a2b78164b96be8b326417a49e7674a36974403002102a7ad49fb42a4659eec3352e581095a2e3521736261d252150db5871"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-414ba7a3d1bcb68a89b3adf1bf8c6a2b78164b96be8b326417a49e7674a36974403002102a7ad49fb42a4659eec3352e581095a2e3521736261d252150db5871"' :
                                            'id="xs-components-links-module-AppModule-414ba7a3d1bcb68a89b3adf1bf8c6a2b78164b96be8b326417a49e7674a36974403002102a7ad49fb42a4659eec3352e581095a2e3521736261d252150db5871"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-99f8b1e22fe5cf6a4696cfa2308031e48d382275cc769e8662575fb86aec2d9fe825d7a614bef2f6100c2f18a0ca2aef1f8de6508e3f7307dde79695820ad5f5"' : 'data-target="#xs-components-links-module-HomeModule-99f8b1e22fe5cf6a4696cfa2308031e48d382275cc769e8662575fb86aec2d9fe825d7a614bef2f6100c2f18a0ca2aef1f8de6508e3f7307dde79695820ad5f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-99f8b1e22fe5cf6a4696cfa2308031e48d382275cc769e8662575fb86aec2d9fe825d7a614bef2f6100c2f18a0ca2aef1f8de6508e3f7307dde79695820ad5f5"' :
                                            'id="xs-components-links-module-HomeModule-99f8b1e22fe5cf6a4696cfa2308031e48d382275cc769e8662575fb86aec2d9fe825d7a614bef2f6100c2f18a0ca2aef1f8de6508e3f7307dde79695820ad5f5"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobDetailsModule.html" data-type="entity-link" >JobDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JobDetailsModule-83c0699471cd6d7e89fd560229038150b43b6537743e128d3ad85588352d5719b6f3de20e9d12fe127765fdbd56ee891c43a1e22d1f9bc9efc09aa1f4af0fad7"' : 'data-target="#xs-components-links-module-JobDetailsModule-83c0699471cd6d7e89fd560229038150b43b6537743e128d3ad85588352d5719b6f3de20e9d12fe127765fdbd56ee891c43a1e22d1f9bc9efc09aa1f4af0fad7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JobDetailsModule-83c0699471cd6d7e89fd560229038150b43b6537743e128d3ad85588352d5719b6f3de20e9d12fe127765fdbd56ee891c43a1e22d1f9bc9efc09aa1f4af0fad7"' :
                                            'id="xs-components-links-module-JobDetailsModule-83c0699471cd6d7e89fd560229038150b43b6537743e128d3ad85588352d5719b6f3de20e9d12fe127765fdbd56ee891c43a1e22d1f9bc9efc09aa1f4af0fad7"' }>
                                            <li class="link">
                                                <a href="components/JobDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobDetailsRoutingModule.html" data-type="entity-link" >JobDetailsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
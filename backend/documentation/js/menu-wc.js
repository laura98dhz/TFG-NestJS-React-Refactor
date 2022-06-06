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
                    <a href="index.html" data-type="index-link">backend documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                            'data-target="#controllers-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' : 'data-target="#xs-controllers-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' :
                                            'id="xs-controllers-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/MailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' : 'data-target="#xs-injectables-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' :
                                        'id="xs-injectables-links-module-AppModule-4577a7e9300218899d07aad57908c2b432afd8805ea2cea93b775bdaf50f14d723dd8fa3168b7ef778dcd29e1db743d878452fb9f3492a9b8692cd4794c591bb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImagenesModule.html" data-type="entity-link" >ImagenesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' : 'data-target="#xs-controllers-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' :
                                            'id="xs-controllers-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' }>
                                            <li class="link">
                                                <a href="controllers/ImagenesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagenesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' : 'data-target="#xs-injectables-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' :
                                        'id="xs-injectables-links-module-ImagenesModule-cae2bb41d01a07cf74750e013f055c00bb9527088e88e9e04cc7efc551154af77d1585c58a5ede4046a4e095c79e56b721fa08af6c168fd31a0358e704a86510"' }>
                                        <li class="link">
                                            <a href="injectables/ImagenesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagenesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InmueblesModule.html" data-type="entity-link" >InmueblesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' : 'data-target="#xs-controllers-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' :
                                            'id="xs-controllers-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' }>
                                            <li class="link">
                                                <a href="controllers/InmueblesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmueblesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' : 'data-target="#xs-injectables-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' :
                                        'id="xs-injectables-links-module-InmueblesModule-ad4017c9cc92b98185ce93afca24ed702047cf3d6efb78c8ebbd3a2a24847fa02330d89676f56f0e6b8cf59b5b2afef8fb7a26ab614ae95eb4d5b95ab70f9af8"' }>
                                        <li class="link">
                                            <a href="injectables/InmueblesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmueblesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailsModule.html" data-type="entity-link" >MailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' : 'data-target="#xs-controllers-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' :
                                            'id="xs-controllers-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' }>
                                            <li class="link">
                                                <a href="controllers/MailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' : 'data-target="#xs-injectables-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' :
                                        'id="xs-injectables-links-module-MailsModule-dfb7b9f3d4d81480c03802fc953354646e2d62582231980800342724414cc330b7662639bb69e1f2de9399e622e9738572964b7d44202d8b13d5e1b292e2fb39"' }>
                                        <li class="link">
                                            <a href="injectables/MailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuariosModule.html" data-type="entity-link" >UsuariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' : 'data-target="#xs-controllers-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' :
                                            'id="xs-controllers-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' }>
                                            <li class="link">
                                                <a href="controllers/UsuariosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' : 'data-target="#xs-injectables-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' :
                                        'id="xs-injectables-links-module-UsuariosModule-cc702b176b92e5a609b4175062622175a2c69714cc23d794b5ea68b48d7eadc35d7caa295fb2e35146197ad347bda6a1b05fbe0f8b36de93195b5dac7a122c80"' }>
                                        <li class="link">
                                            <a href="injectables/UsuariosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ImagenesController.html" data-type="entity-link" >ImagenesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InmueblesController.html" data-type="entity-link" >InmueblesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailsController.html" data-type="entity-link" >MailsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuariosController.html" data-type="entity-link" >UsuariosController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/ImagenesEntity.html" data-type="entity-link" >ImagenesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/InmueblesEntity.html" data-type="entity-link" >InmueblesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UsuariosEntity.html" data-type="entity-link" >UsuariosEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateImagenesDto.html" data-type="entity-link" >CreateImagenesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInmuebleDto.html" data-type="entity-link" >CreateInmuebleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImagenesRepository.html" data-type="entity-link" >ImagenesRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/InmueblesRepository.html" data-type="entity-link" >InmueblesRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInmuebleDto.html" data-type="entity-link" >UpdateInmuebleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInmuebleDto-1.html" data-type="entity-link" >UpdateInmuebleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuariosRepository.html" data-type="entity-link" >UsuariosRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImagenesService.html" data-type="entity-link" >ImagenesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InmueblesService.html" data-type="entity-link" >InmueblesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailsService.html" data-type="entity-link" >MailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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
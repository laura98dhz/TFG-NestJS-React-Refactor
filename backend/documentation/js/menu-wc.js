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
                                            'data-target="#controllers-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' : 'data-target="#xs-controllers-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' :
                                            'id="xs-controllers-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' }>
                                            <li class="link">
                                                <a href="controllers/ImagenesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagenesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' : 'data-target="#xs-injectables-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' :
                                        'id="xs-injectables-links-module-ImagenesModule-c41498b6e0f28ca6a0ada2dd062fd0e3173fe311bc18177cb1aeb6b6fa4343e1e49b5dfc07f94a1c11c56af9f4e6e4d656a7d82804d3d07d4a7e9252a307ca04"' }>
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
                                            'data-target="#controllers-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' : 'data-target="#xs-controllers-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' :
                                            'id="xs-controllers-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' }>
                                            <li class="link">
                                                <a href="controllers/InmueblesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmueblesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' : 'data-target="#xs-injectables-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' :
                                        'id="xs-injectables-links-module-InmueblesModule-307e73cb1b21ce4b3a622ee95aaabc4061bf2bcf9614126f31fe3df8b519468ff3b34281a1032a4d0c2d37b1b763d76d00fc15eeab95e843d05fbd649a16e6e3"' }>
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
                                            'data-target="#controllers-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' : 'data-target="#xs-controllers-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' :
                                            'id="xs-controllers-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' }>
                                            <li class="link">
                                                <a href="controllers/UsuariosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' : 'data-target="#xs-injectables-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' :
                                        'id="xs-injectables-links-module-UsuariosModule-5f84893df5c57c6326ea2517faccb52b1216c58f29854003bfc67a0044e0967be54ff9e4fc019fed1c476292c49c5e1e25f23b0a9ae19a27e30e6c7e8be34c6f"' }>
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
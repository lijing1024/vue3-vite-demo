import { App, popScopeId } from 'vue';
import ELContainer from './Container.vue';
import ELAside from './Aside.vue';
import ELHeader from './Header.vue';
import ELFooter from './Footer.vue';
import ELMain from './Main.vue';

export default {
  install(app: App) {
    app.component(ELContainer.name, ELContainer);
    app.component(ELAside.name, ELAside);
    app.component(ELHeader.name, ELHeader);
    app.component(ELFooter.name, ELFooter);
    app.component(ELMain.name, ELMain);
  }
}
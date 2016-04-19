import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [DataService]);

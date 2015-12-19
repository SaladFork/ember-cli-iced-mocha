import { setResolver } from 'ember-mocha';
import Reporter from 'ember-cli-iced-mocha/reporter';
import resolver from './helpers/resolver';

setResolver(resolver);
window.mocha.reporter((runner) => new Reporter(runner));

#!/usr/bin/env node
import yargs from 'yargs';
import { run } from './Repl/repl';
import { HalvaRunTests } from './TestRunner/Test';
import { HalvaTestConfig } from './TestRunner';

// tslint:disable-next-line: no-unused-expression
yargs
  .usage('Usage: $0 <cmd> [args]')
  .command('console [path]', 'run console', (yargs) => {
    yargs.positional('path', {
      type: 'string',
      default: null,
      describe: 'path to configure file'
    })
  }, (argv: any) => {
    run(argv.path)
  })
  .command('test', 'run tests', (yargs) => {
    yargs.positional('path', {
      type: 'string',
      default: null,
      describe: 'path to test folder',
      demandOption: true
    })
    yargs.positional('configureFile', {
      type: 'string',
      default: null,
      describe: 'path to configure file'
    })
    yargs.positional('bail', {
      type: 'boolean',
      default: false,
      describe: 'enable bail'
    })
  }, (argv: any) => {
    HalvaRunTests(new HalvaTestConfig(argv.path, null, argv.configureFile, argv.bail));
  })
  .help()
  .argv
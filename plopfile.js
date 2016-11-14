var mkdirp = require('mkdirp');

function addDirectory(path, fs) {
  mkdirp.sync(path);
  return true;
}

function getSubPath(path) {
  path = path.trim();
  if (path === '') return '';
  return path + '/';
}

module.exports = function (plop) {
  plop.addHelper('subPath', function (text) {
    "use strict";
    return getSubPath(text);
  });

  plop.setGenerator('Base Component', {
    description: 'this is a base component',
    prompts: [
      {
        type: 'input',
        name: 'subpath',
        message: 'What is the sub path of the component?',
        default: '',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Is the component state-less?',
        default: false
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: function (answers) {
      var actions = [];
      actions.push(function (answers) {
        process.chdir(plop.getPlopfilePath())
        var fs = require('fs');
        var path = plop.renderString('frontend/src/components/{{subPath subpath}}{{properCase name }}', answers);
        addDirectory(path, fs);
        return plop.renderString('{{name}} directory is created in src/component', answers);
      });

      if (answers.stateless) {
        actions.push({
          type: 'add',
          path: 'frontend/src/components/{{subPath subpath}}{{ properCase name }}/{{ properCase name }}.js',
          templateFile: '.plop/baseStatelessComponent.hds'
        });
      } else {
        actions.push({
          type: 'add',
          path: 'frontend/src/components/{{subPath subpath}}{{ properCase name }}/{{ properCase name }}.js',
          templateFile: '.plop/baseComponent.hds'
        });
      }

      actions.push(
        {
          type: 'add',
          path: 'frontend/src/components/{{subPath subpath}}{{ properCase name }}/index.js',
          templateFile: '.plop/componentIndex.hbs'
        }
      );

      actions.push(
        {
          type: 'add',
          path: 'frontend/src/components/{{subPath subpath}}{{ properCase name}}/{{properCase name}}.scss',
          templateFile: '.plop/styles.txt',
        }
      );

      actions.push(
        {
          type: 'modify',
          path: 'stories/index.js',
          pattern: /(\/\/ Import Stops Here)/gi,
          template: 'import {{properCase name}} from \'../frontend/src/components/{{subPath subpath}}{{properCase name}}\' \n$1'
        }
      );

      actions.push(
        {
          type: 'modify',
          path: 'stories/index.js',
          pattern: /(\/\/ Stories Stop Here)/gi,
          templateFile: '.plop/appendStories.hbs'
        }
      );

      return actions;
    }
  })
}
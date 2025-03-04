# Following two lines are needed for the Custom CSS Loader extension
sudo chown -R $(whoami) "$(which code)"
sudo chown -R $(whoami) /usr/share/code
if [ ! -L ~/.vscode/extensions/vscode-pkstheme ]; then
  ln -s ~/Projects/vscode-pkstheme ~/.vscode/extensions/
fi

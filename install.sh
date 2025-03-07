# Following two lines are needed for the Custom CSS Loader extension
sudo chown -R $(whoami) "$(which code)"
sudo chown -R $(whoami) /usr/share/code

# Symlink this directory to .vscode/extensions
SCRIPT_DIR=$(dirname "$(realpath "$0")")
if [ ! -L ~/.vscode/extensions/vscode-pkstheme ]; then
  ln -s "$SCRIPT_DIR" ~/.vscode/extensions/
fi

# Following two lines are needed for the Custom CSS Loader extension
sudo chown -R $(whoami) "$(which code)"
sudo chown -R $(whoami) /usr/share/code

# Symlink this directory to .vscode/extensions
EXTDIR=$(dirname "$(realpath "$0")")
EXTNAME=$(basename "$EXTDIR")
if [ ! -L ~/.vscode/extensions/$EXTNAME ]; then
  ln -s "$EXTDIR" "~/.vscode/extensions/"
fi

# Following two lines are needed for the Custom CSS Loader extension
sudo chown -R $(whoami) "$(which code)"
sudo chown -R $(whoami) /usr/share/code

# Symlink this directory to .vscode/extensions
EXTDIR=$(dirname "$(realpath "$0")")
EXTNAME=$(basename "$EXTDIR")
echo "extdir: $EXTDIR"
echo "extname: $EXTNAME"
if [ ! -L $HOME/.vscode/extensions/$EXTNAME ]; then
  ln -s "$EXTDIR" "$HOME/.vscode/extensions"
fi

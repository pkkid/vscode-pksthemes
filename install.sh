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

# Inject custom styles into Claude Code extension
echo "Injecting custom styles into Claude Code extension..."
LATEST_CLAUDE=$(ls -d ~/.vscode/extensions/anthropic.claude-code-* 2>/dev/null | sort -V | tail -1)
if [ -n "$LATEST_CLAUDE" ] && [ -d "$LATEST_CLAUDE" ]; then
  INDEX_CSS="$LATEST_CLAUDE/webview/index.css"
  if [ -f "$INDEX_CSS" ]; then
    # Backup the original if not already backed up
    if [ ! -f "$INDEX_CSS.bak" ]; then
      cp "$INDEX_CSS" "$INDEX_CSS.bak"
    fi
    # Remove any existing custom styles
    if grep -q "PKSTHEME CUSTOM STYLES" "$INDEX_CSS"; then
      cp "$INDEX_CSS.bak" "$INDEX_CSS"
    fi
    # Add newlines and inject custom styles
    echo -e "\n\n/* PKSTHEME CUSTOM STYLES */" >> "$INDEX_CSS"
    cat "$EXTDIR/src/styles.css" >> "$INDEX_CSS"
  fi
fi

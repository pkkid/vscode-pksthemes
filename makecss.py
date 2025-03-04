#!/usr/bin/env python
import os
import base64
import subprocess
from os.path import dirname, abspath

ROOT = f"{dirname(abspath(__file__))}/favicons"
CSS = "a.window-appicon[data-project^='{basename}'] { background-image: url('data:image/gif;base64,{data}') !important; }"  # noqa
text = ""
for root, dirs, files in os.walk(ROOT):
    for file in files:
        if file.endswith('.gif'):
            filepath = os.path.join(root, file)
            basename = os.path.basename(filepath)
            with open(filepath, 'rb') as handle:
                data = base64.b64encode(handle.read())
            css = CSS.replace('{basename}', basename.split('.')[0])
            css = css.replace('{data}', data.decode('utf8'))
            text += f'{css}\n'
            print(f'{css[0:80]}...')

subprocess.run(['xclip', '-selection', 'clipboard'], input=text.encode('utf8'))
print('\n==> CSS copied to clipboard.\n')

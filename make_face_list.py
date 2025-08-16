import os
import json

# 顔画像フォルダのパス
face_folder = 'images'

# .pngファイルだけを取得して、拡張子を除いた名前にする
face_files = [f[:-4] for f in os.listdir(face_folder) if f.endswith('.png')]

# JSONファイルに書き出す
with open('face_list.json', 'w', encoding='utf-8') as f:
    json.dump(face_files, f, ensure_ascii=False, indent=2)

print("face_list.json を作成しました！")
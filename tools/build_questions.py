#!/usr/bin/env python3
"""Build q/<name>.js from tools/qsrc/<module>.py.
Usage: python3 tools/build_questions.py spi_doppler spi-doppler
Answer positions are shuffled with a fixed seed so rebuilds are stable.
Question files are APPEND-ONLY: progress is stored by question index, so never
reorder, remove or insert questions in an existing file, and always add new
files at the END of the script list in index.html. To fix a question, edit it in place.
"""
import sys, json, random, importlib, os, hashlib
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(root, "tools", "qsrc"))
mod, out = sys.argv[1], sys.argv[2]
src = importlib.import_module(mod).Q
rows = []
for topic, stem, right, wrong, exp, level in src:
    opts = [right] + list(wrong)
    rnd = random.Random(hashlib.md5(stem.encode()).hexdigest())
    rnd.shuffle(opts)
    row = [topic, stem, opts, opts.index(right), exp, 1]
    if level == "C": row.append("C")
    rows.append(row)
stems = [r[1] for r in rows]
assert len(stems) == len(set(stems)), "duplicate stem"
body = ",\n".join(json.dumps(r, ensure_ascii=False) for r in rows)
open(os.path.join(root, "q", out + ".js"), "w").write("// Built from tools/qsrc/%s.py. Append-only.\nQ.push(\n%s\n);\n" % (mod, body))
print(out, len(rows), "questions; answer positions:", [sum(1 for r in rows if r[3]==k) for k in range(4)])

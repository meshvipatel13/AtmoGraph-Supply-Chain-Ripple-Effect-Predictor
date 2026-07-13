import spacy

nlp = spacy.load("en_core_web_sm")

with open("backend/nlp/test_news.txt","r",encoding="utf-8") as f:
    text=f.read()

doc=nlp(text)

print("Entities Found")
print("-"*40)

for ent in doc.ents:
    print(ent.text,ent.label_)
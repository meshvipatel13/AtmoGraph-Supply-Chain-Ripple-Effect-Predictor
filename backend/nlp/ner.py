import spacy
from entity_matcher import match_entity
from graph_update import update_risk

nlp = spacy.load("en_core_web_sm")

with open("backend/nlp/test_news.txt","r",encoding="utf-8") as f:
    text=f.read()

doc=nlp(text)

print("Entities Found")
print("-"*40)

for ent in doc.ents:

    print(ent.text, ent.label_)

    match_entity(ent.text)

    update_risk(ent.text)
const configAbility = {
  "fileName": "8015020_Monster_W2_Huanlong_Ability08_Part01",
  "childAbilityList": [
    "8015020_Monster_W2_Huanlong_Ability08_Part01",
    "8015020_Monster_W2_Huanlong_Ability08_Part02",
    "8015020_Monster_W2_Huanlong_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Huanlong_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"541144260\">Monster_W2_Huanlong_Ability08_First</a>"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"541144260\">Monster_W2_Huanlong_Ability08_First</a>",
        "invertCondition": true
      }
    }
  ],
  "references": []
}
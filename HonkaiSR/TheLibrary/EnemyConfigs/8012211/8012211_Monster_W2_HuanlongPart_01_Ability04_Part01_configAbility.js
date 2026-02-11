const configAbility = {
  "fileName": "8012211_Monster_W2_HuanlongPart_01_Ability04_Part01",
  "childAbilityList": [
    "8012211_Monster_W2_HuanlongPart_01_Ability04_Part01",
    "8012211_Monster_W2_HuanlongPart_01_Ability04_Part02",
    "8012211_Monster_W2_HuanlongPart_01_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W2_HuanlongPart_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3
      }
    }
  ],
  "references": []
}
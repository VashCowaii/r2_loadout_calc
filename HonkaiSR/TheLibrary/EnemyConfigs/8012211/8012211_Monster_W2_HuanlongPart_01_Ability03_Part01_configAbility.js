const configAbility = {
  "fileName": "8012211_Monster_W2_HuanlongPart_01_Ability03_Part01",
  "childAbilityList": [
    "8012211_Monster_W2_HuanlongPart_01_Ability03_Part01",
    "8012211_Monster_W2_HuanlongPart_01_Ability03_Part02",
    "8012211_Monster_W2_HuanlongPart_01_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W2_HuanlongPart_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
      }
    }
  ],
  "references": []
}
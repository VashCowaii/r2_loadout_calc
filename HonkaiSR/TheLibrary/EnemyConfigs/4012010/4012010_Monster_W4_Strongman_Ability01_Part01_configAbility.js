const configAbility = {
  "fileName": "4012010_Monster_W4_Strongman_Ability01_Part01",
  "childAbilityList": [
    "4012010_Monster_W4_Strongman_Ability01_Camera",
    "4012010_Monster_W4_Strongman_Ability01_Part01",
    "4012010_Monster_W4_Strongman_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W4_Strongman_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
        "compareType": ">=",
        "value2": 1,
        "valueType": "Layer"
      }
    }
  ],
  "references": []
}
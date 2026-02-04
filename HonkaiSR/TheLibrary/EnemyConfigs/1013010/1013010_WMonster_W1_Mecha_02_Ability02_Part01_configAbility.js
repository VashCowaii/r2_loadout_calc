const configAbility = {
  "fileName": "1013010_WMonster_W1_Mecha_02_Ability02_Part01",
  "childAbilityList": [
    "1013010_WMonster_W1_Mecha_02_Ability02_Camera",
    "1013010_WMonster_W1_Mecha_02_Ability02_Part01",
    "1013010_WMonster_W1_Mecha_02_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "OneMore"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "WMonster_W1_Mecha_02_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}
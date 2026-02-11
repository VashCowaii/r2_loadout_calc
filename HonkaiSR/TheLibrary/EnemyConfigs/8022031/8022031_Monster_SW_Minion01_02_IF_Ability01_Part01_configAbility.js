const configAbility = {
  "fileName": "8022031_Monster_SW_Minion01_02_IF_Ability01_Part01",
  "childAbilityList": [
    "8022031_Monster_SW_Minion01_02_Ability01_Camera",
    "8022031_Monster_SW_Minion01_02_IF_Ability01_Part01",
    "8022031_Monster_SW_Minion01_02_IF_Ability01_Part02",
    "8022031_Monster_Standard_Suicide_StanceBreak"
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
      "ability": "Monster_SW_Minion01_02_IF_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}
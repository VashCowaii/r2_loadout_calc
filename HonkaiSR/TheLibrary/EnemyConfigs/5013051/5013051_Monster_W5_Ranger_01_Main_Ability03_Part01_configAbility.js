const configAbility = {
  "fileName": "5013051_Monster_W5_Ranger_01_Main_Ability03_Part01",
  "childAbilityList": [
    "5013051_Monster_W5_Ranger_Ability03_Camera",
    "5013051_Monster_W5_Ranger_01_Main_Ability03_Part01",
    "5013051_Monster_W5_Ranger_01_Main_Ability03_Part02"
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
      "ability": "Monster_W5_Ranger_01_Main_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}
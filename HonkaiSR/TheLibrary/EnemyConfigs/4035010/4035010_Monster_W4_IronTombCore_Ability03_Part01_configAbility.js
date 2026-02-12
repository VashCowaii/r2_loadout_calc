const configAbility = {
  "fileName": "4035010_Monster_W4_IronTombCore_Ability03_Part01",
  "childAbilityList": [
    "4035010_Monster_W4_IronTombCore_Ability03_Part01",
    "4035010_Monster_W4_IronTombCore_Ability03_Part02",
    "4035010_Monster_W4_IronTombCore_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_IronTombCore_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}
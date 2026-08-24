const configAbility = {
  "fileName": "4063012_Monster_W4_Serpent_Ability04_Part01_FateRin",
  "childAbilityList": [
    "4063012_Monster_W4_Serpent_Ability04_Camera",
    "4063012_Monster_W4_Serpent_Ability04_Part01_FateRin",
    "4063012_Monster_W4_Serpent_Ability04_Part02_FateRin"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W4_Serpent_Ability04_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0",
      "revertDefault": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}
const configAbility = {
  "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
  "childAbilityList": [
    "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady",
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
    "61001_ActionEventAbility_Camera_AllDarkTeam"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "HeliobusActionAbilityForceBreak_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}
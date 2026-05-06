const configAbility = {
  "fileName": "61002_HeliobusActionAbilityBPRecover_Ability03_Part01",
  "childAbilityList": [
    "61002_HeliobusActionAbilityBPRecover_Ability03_EnterReady",
    "61002_HeliobusActionAbilityBPRecover_Ability03_Part01",
    "61002_HeliobusActionAbilityBPRecover_Ability03_Part02",
    "61002_ActionEventAbility_Camera_AllLightTeam"
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
      "ability": "HeliobusActionAbilityBPRecover_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}
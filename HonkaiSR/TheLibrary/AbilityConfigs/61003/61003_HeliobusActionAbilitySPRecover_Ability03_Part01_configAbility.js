const configAbility = {
  "fileName": "61003_HeliobusActionAbilitySPRecover_Ability03_Part01",
  "childAbilityList": [
    "61003_HeliobusActionAbilitySPRecover_Ability03_EnterReady",
    "61003_HeliobusActionAbilitySPRecover_Ability03_Part01",
    "61003_HeliobusActionAbilitySPRecover_Ability03_Part02",
    "61003_ActionEventAbility_Camera_AllLightTeam"
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
      "ability": "HeliobusActionAbilitySPRecover_Ability03_Part02",
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
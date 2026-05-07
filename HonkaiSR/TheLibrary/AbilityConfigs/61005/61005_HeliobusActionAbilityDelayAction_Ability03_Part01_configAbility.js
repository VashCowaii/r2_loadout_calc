const configAbility = {
  "fileName": "61005_HeliobusActionAbilityDelayAction_Ability03_Part01",
  "childAbilityList": [
    "61005_HeliobusActionAbilityDelayAction_Ability03_EnterReady",
    "61005_HeliobusActionAbilityDelayAction_Ability03_Part01",
    "61005_HeliobusActionAbilityDelayAction_Ability03_Part02",
    "61005_ActionEventAbility_Camera_AllDarkTeam"
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
      "ability": "HeliobusActionAbilityDelayAction_Ability03_Part02",
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
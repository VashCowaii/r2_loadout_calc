const configAbility = {
  "fileName": "61004_HeliobusActionAbilityBoomerang_Ability03_Part01",
  "childAbilityList": [
    "61004_HeliobusActionAbilityBoomerang_Ability03_EnterReady",
    "61004_HeliobusActionAbilityBoomerang_Ability03_Part01",
    "61004_HeliobusActionAbilityBoomerang_Ability03_Part02",
    "61004_ActionEventAbility_Camera_AllDarkTeam"
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
      "ability": "HeliobusActionAbilityBoomerang_Ability03_Part02",
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
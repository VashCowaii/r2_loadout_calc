const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability03_Part01",
  "childAbilityList": [
    "MortenaxBlade_MortenaxBlade_Ability03_Camera",
    "MortenaxBlade_MortenaxBlade_Ability03_EnterReady",
    "MortenaxBlade_MortenaxBlade_Ability03_Part01",
    "MortenaxBlade_MortenaxBlade_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MortenaxBlade_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}
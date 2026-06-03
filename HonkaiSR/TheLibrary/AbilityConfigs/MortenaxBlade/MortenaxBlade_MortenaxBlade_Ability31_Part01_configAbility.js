const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability31_Part01",
  "childAbilityList": [
    "MortenaxBlade_MortenaxBlade_Ability31_Camera",
    "MortenaxBlade_MortenaxBlade_Ability31_EnterReady",
    "MortenaxBlade_MortenaxBlade_Ability31_Part01",
    "MortenaxBlade_MortenaxBlade_Ability31_Part02"
  ],
  "skillTrigger": "Skill31",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
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
      "ability": "MortenaxBlade_Ability31_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}
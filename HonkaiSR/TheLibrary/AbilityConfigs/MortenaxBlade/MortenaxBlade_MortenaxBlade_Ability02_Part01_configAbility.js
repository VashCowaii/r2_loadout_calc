const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability02_Part01",
  "childAbilityList": [
    "MortenaxBlade_MortenaxBlade_Ability02_Camera",
    "MortenaxBlade_MortenaxBlade_Ability02_Part01",
    "MortenaxBlade_MortenaxBlade_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    5,
    10,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MortenaxBlade_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}
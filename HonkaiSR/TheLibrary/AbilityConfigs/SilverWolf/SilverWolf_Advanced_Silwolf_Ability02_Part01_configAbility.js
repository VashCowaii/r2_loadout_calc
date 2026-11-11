const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Ability02_Part01",
  "childAbilityList": [
    "SilverWolf_Advanced_Silwolf_Ability02_Camera",
    "SilverWolf_Advanced_Silwolf_Ability02_Part01",
    "SilverWolf_Advanced_Silwolf_Ability02_Part02",
    "SilverWolf_Advanced_Silwolf_Ability02_Success_Camera",
    "SilverWolf_Advanced_Silwolf_Ability02_Failed_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "target1": {
          "name": "Target Name",
          "target": "{{Ability Target List}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "W5_GluttonyParts_00"
        }
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Advanced_Silwolf_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}
const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Ability02_Part01",
  "childAbilityList": [
    "Gilgamesh_Gilgamesh_Ability02_Camera",
    "Gilgamesh_Gilgamesh_Ability02_Camera_1",
    "Gilgamesh_Gilgamesh_Ability02_Part01",
    "Gilgamesh_Gilgamesh_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target Group}}"
      },
      "ability": "Gilgamesh_Ability02_Part02",
      "isTrigger": true
    },
    "EventTypeSPARXIECON (Not always an error)",
    "EventTypeSPARXIECON (Not always an error)[1 false]"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  }
}
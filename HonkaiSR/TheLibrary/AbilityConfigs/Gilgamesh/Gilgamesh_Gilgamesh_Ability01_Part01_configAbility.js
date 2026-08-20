const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Ability01_Part01",
  "childAbilityList": [
    "Gilgamesh_Gilgamesh_Ability01_Camera",
    "Gilgamesh_Gilgamesh_Ability01_Camera_1",
    "Gilgamesh_Gilgamesh_Ability01_Part01",
    "Gilgamesh_Gilgamesh_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
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
      "ability": "Gilgamesh_Ability01_Part02",
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
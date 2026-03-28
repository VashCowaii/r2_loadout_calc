const configAbility = {
  "fileName": "2035010_Monster_W2_Feixiao_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": 2033020,
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}
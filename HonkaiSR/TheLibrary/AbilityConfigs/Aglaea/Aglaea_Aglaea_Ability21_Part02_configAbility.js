const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CasterBaseHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "variableName": "_CasterEnergy",
      "value": {
        "operator": "Variables[0] (_Energy) || RETURN",
        "displayLines": "_Energy",
        "constants": [],
        "variables": [
          "_Energy"
        ]
      }
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.5) || RETURN",
        "displayLines": "0.5",
        "constants": [],
        "variables": [
          0.5
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}
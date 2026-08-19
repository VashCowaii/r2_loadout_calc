const configAbility = {
  "fileName": "Evernight_Evernight_Ability03_Part01",
  "childAbilityList": [
    "Evernight_Evernight_Ability03_Camera",
    "Evernight_Evernight_Ability03_EnterReady",
    "Evernight_Evernight_Ability03_Part01",
    "Evernight_Evernight_Ability03_Part02",
    "Evernight_Evernight_Ability03_Part02_Charge"
  ],
  "skillTrigger": "Skill03",
  "realAttacker": "Servant",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    30,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable (VFX)",
      "variableName": "_CL_Is_S03_Ready",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "of": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
        },
        "mustBeAlive2": true
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Evernight_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1393796287\">function_Evernight_Group_SizeControl_STB2</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}
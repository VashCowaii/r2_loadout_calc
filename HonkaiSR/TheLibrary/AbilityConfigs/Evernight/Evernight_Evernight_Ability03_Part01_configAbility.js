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
  "references": []
}